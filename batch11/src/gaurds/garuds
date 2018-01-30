const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: DashboardLayoutComponent,
    children: [
      { path: 'dashboard/s', component: SuperAccountComponent },
      { path: 'category', component: CategoryComponent},
    ]
  },
  // Dfault Layout for pages
  { path: '', component: DefaultLayoutComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'features', component: FeaturesComponent },
    ]
  },
];

/* login logic */
login(username: string, password: string) {
      /*const body = new URLSearchParams();
          body.set('name', username);
          body.set('company', password);
          let headers = new Headers();
          headers.append('Content-Type',
               'application/x-www-form-urlencoded');*/
        let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(`${apiUrl}/superAdminLogin`, JSON.stringify({ email: username, password: password }) ,
        { headers: headers }).map((response: Response) => {
         let jsonData = response.json();
               if (jsonData.stat === true) {
               

               localStorage.setItem('currentUser', 

                 JSON.stringify(

                   {
                    user_name: jsonData.content.first_name,
                    user_role_id: jsonData.content.role_id,
                   user_id: jsonData.content.id,
                   parent_id: jsonData.content.parent_id }));
                return true;
              }
              return jsonData;
            });
    }

    // sign out
    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
