import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { SharedAuthResolver } from '@cha/domain/auth';
import { LoginComponent } from '@cha/domain/login';

const ROUTES: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('@cha/admin/main').then((mod) => mod.ChaAdminMainModule),
    resolve: {
      main: SharedAuthResolver,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
    preloadingStrategy: PreloadAllModules,
    useHash: true
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
