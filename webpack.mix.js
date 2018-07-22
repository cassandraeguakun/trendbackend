let mix = require('laravel-mix');



mix
    .sass('resources/assets/User/sass/app.scss', 'public/css')
    .sass('resources/assets/Admin/sass/admin.scss', 'public/css/admin')
    .js('resources/assets/User/js/app.js', 'public/js')
    .js('resources/assets/Admin/js/admin.js', 'public/js/admin')
// .styles(
// [
//     "resources/assets/css/app-shell/loader.css",
//     "resources/assets/css/app-shell/logo.css",
//     "resources/assets/css/app-shell/btns.css",
//     "resources/assets/css/app-shell/drawer.css"
// ],
// "public/css/app-shell.css")