import { ApiService } from './../../data/network/apiService';


export class HomeRepository{
    apiService = new ApiService();

    async getUsers() {
        const url = "https://reqres.in/api/users?page=2";
        return this.apiService.getGetApiResponse(url);
    }

}