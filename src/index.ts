import { StorageArea as IStorageArea } from "kv-storage-interface";
import storageImpl, { StorageArea as StorageAreaImpl } from "kv-storage-polyfill";
export const StorageArea = StorageAreaImpl as any as typeof IStorageArea;
export default storageImpl as any as IStorageArea;
