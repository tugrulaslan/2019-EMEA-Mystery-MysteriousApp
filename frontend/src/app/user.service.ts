import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {User} from './user';
import {RegistrationSubmission} from './registrationsubmission';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private GET_USER_DATA_URL = 'http://localhost:8080/api/v1/users/username=';
  private SEARCH_CUISINES_URL = 'http://localhost:8080/api/v1/cuisines/';
  private GET_ALL_CUISINES_URL = 'http://localhost:8080/api/v1/cuisines';
  private GET_ALL_INTERESTS_URL = 'http://localhost:8080/api/v1/interests';
  private POST_REGISTRATION_SUBMISSION_URL = 'http://localhost:8080/api/v1/submissionsstr';

  constructor(private http: HttpClient) {
  }

  searchCuisines(cuisinename: string): Observable<any> {
    return this.http.get(`${this.SEARCH_CUISINES_URL}${cuisinename}`);
  }

  getAllCuisines(): Observable<any> {
    return this.http.get(this.GET_ALL_CUISINES_URL);
  }

  getAllInterests(): Observable<any> {
    return this.http.get(this.GET_ALL_INTERESTS_URL);
  }

  getUserBasicInfo(username: string): Observable<Object> {
    return this.http.get(`${this.GET_USER_DATA_URL}${username}`);
  }

  sendRegistrationSubmission(submissionForm: RegistrationSubmission): void {
    this.http.post(this.POST_REGISTRATION_SUBMISSION_URL, submissionForm)
      .subscribe();
  }

}
