import { IStorageFileApi } from './IStorageFileApi'

export interface IStorageClient {

    /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */
    from(id: string): IStorageFileApi
}
