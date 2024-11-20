export function removeAutoGenFields(raw) {
    try {
        const { _id, __v, ...requestedFields } = raw['_doc']; //mongoose auto nambahin field _id, __v, kita ilangin
        return requestedFields;
    } catch {
        console.log('format not supported');
        return raw;
    }
}