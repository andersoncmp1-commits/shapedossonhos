
export function serializeFirestore(value: any, seen = new WeakSet()): any {
  if (value === null || value === undefined) return null;

  // Evita referências circulares
  if (typeof value === 'object') {
    if (seen.has(value)) return null;
    seen.add(value);
  }

  // Timestamp (duck typing): tem toDate() que retorna Date
  if (value && typeof value.toDate === 'function') {
    const d = value.toDate();
    if (d instanceof Date && !isNaN(d.valueOf())) return d.toISOString();
  }

  // GeoPoint (duck typing): possui latitude/longitude numéricos
  if (
    value &&
    typeof value.latitude === 'number' &&
    typeof value.longitude === 'number' &&
    Number.isFinite(value.latitude) &&
    Number.isFinite(value.longitude)
  ) {
    return { latitude: value.latitude, longitude: value.longitude };
  }

  // DocumentReference (duck typing): tem id/path e .parent/.firestore
  if (
    value &&
    typeof value.id === 'string' &&
    typeof value.path === 'string' &&
    typeof value.parent === 'object'
  ) {
    return { id: value.id, path: value.path };
  }

  // Buffer / Uint8Array -> base64 (evita erro)
  if (typeof Buffer !== 'undefined' && Buffer.isBuffer?.(value)) {
    return value.toString('base64');
  }
  if (value instanceof Uint8Array) {
    return Buffer.from(value).toString('base64');
  }

  // BigInt -> string
  if (typeof value === 'bigint') return value.toString();

  // Array
  if (Array.isArray(value)) {
    return value.map((v) => serializeFirestore(v, seen));
  }

  // Objeto comum
  if (typeof value === 'object') {
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(value)) {
      // undefined não é JSON: vira null
      out[k] = v === undefined ? null : serializeFirestore(v, seen);
    }
    return out;
  }

  // Primitivos ok
  return value;
}
