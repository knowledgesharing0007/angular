npm install bootstrap

"styles":
[
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
],
"scripts":
[
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]

Install PrimeNg for third-party controls.

Reference: https://primefaces.org/primeng/showcase/#/setup

npm install primeng
npm install primeicons
npm install @angular/cdk


"styles": [
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "node_modules/primeng/resources/themes/saga-blue/theme.css",
   "node_modules/primeng/resources/primeng.min.css",
   "node_modules/primeicons/primeicons.css",
   "src/styles.scss"
 ],
 
 Routes
 
 { path: '', component: HomeComponent },
  { path: 'user', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user/:id', component: AddUserComponent }

  nav bar
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" [routerLink]="['/']">Knowledge Sharing</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" routerLinkActive="active" [routerLink]="['/']"
                        [routerLinkActiveOptions]="{exact:
                            true}">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" routerLinkActive="active"
                        [routerLink]="['/user']">User</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


