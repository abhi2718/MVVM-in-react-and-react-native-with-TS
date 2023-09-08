import { AppUrl } from '../../utils/appUrl';
import { ApiService } from './../../data/network/apiService';

export class HomeRepository{
    apiService = new ApiService();

    async getUsers(pageNumber:number) {
        const url = `${AppUrl.userEndPoint}?page=${pageNumber}`;
        return this.apiService.getGetApiResponse(url);
    }

}