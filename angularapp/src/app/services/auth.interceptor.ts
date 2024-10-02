import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
 
const TOKEN_HEADER = 'Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
    constructor(private service: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.service.getToken();
        // alert('intercdprotor......'+token)
        let authToken = req;
        if (token != null) {
            // console.log("om");    
           console.log(token);
            authToken = authToken.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
 
            return next.handle(authToken);
           
        }
       
        return next.handle(req);
    }
 
}