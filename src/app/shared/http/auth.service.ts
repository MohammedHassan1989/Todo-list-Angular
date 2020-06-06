import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userToken: string = ''
  setUserInfo(userInfo): void {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }

  private getUserInfo(): any {
    let userInfoStr = !!localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : ''
    if (userInfoStr) {
      let userInfo = JSON.parse(userInfoStr);
      return userInfo;
    }
    else
      return null;

  }
  getToken(): string {
    let userInfo = this.getUserInfo()
    if (userInfo)
      return userInfo.token;
    else
      return '';

  }

  getuserID(): string {
    let userInfo = this.getUserInfo()
    if (userInfo)
      return userInfo._id;
    else
      return null;
  }
  getuserName(): string {
   
    let userInfo = this.getUserInfo()
    if (userInfo)
      return userInfo.username;
    else
      return null;
  }

}