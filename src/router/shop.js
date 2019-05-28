const route ={
    path:'/shop',
    component:()=>import('../pages/shop/root'),
    // children: [
    //     {path:'shop1',component:()=>import('../pages/shop/root1')},
    //     {path:'shop2',component:()=>import('../pages/shop/root2')}
    // ]
}
export default route