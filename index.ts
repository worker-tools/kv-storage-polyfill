import type { StorageArea as IStorageArea, Options } from "https://ghuc.cc/qwtel/kv-storage-interface/index.d.ts";
import storage, { StorageArea as StorageAreaImpl } from "https://cdn.skypack.dev/kv-storage-polyfill@2.0.0";
type StorageAreaConstructor = new (name: string, opts?: Options) => IStorageArea;
type StorageAreaClass = StorageAreaConstructor & { prototype: IStorageArea };
export const StorageArea = StorageAreaImpl as unknown as StorageAreaClass
export default storage as unknown as IStorageArea;
