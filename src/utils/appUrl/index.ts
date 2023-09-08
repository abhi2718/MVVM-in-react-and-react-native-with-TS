export class AppUrl {
    public static readonly BASE_URL = process.env.REACT_APP_API_URL;
    public static readonly userEndPoint = `${this.BASE_URL}/user`;
}