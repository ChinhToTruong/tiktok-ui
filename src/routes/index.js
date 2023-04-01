// Layout
import HeaderOnly from '~/components/Layout/components/Header'

// Pages 
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";




// public routes for common which needn't type password
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout : HeaderOnly },
    { path: '/search', component: Search, layout : null },
];  


// need to type password first
const privateRoutes = [];

export { publicRoutes, privateRoutes };