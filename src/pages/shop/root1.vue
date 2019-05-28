<template>
<div class="contaniar">
    <div id="classify">
        <div class="top-nav">
           <li>管理</li>
           <li>
            <router-link to="/shop/add"><a href="#">新增</a></router-link>   
            </li>
        </div>
        <div class="main">
             <ul class="nav">
                  <li>分类名称</li>
                  
                  <li>操作</li>
             </ul>
             <!-- <ul class="content">
                 <li class="list" v-for="i in 7" :key="i">
                     <el-menu class="menu">
                        <el-submenu class="submenu" index="1">
                           <template class="title" slot="title">家用电器</template>

                           <el-submenu index="1-1" >
                              <template slot="title">小家电</template>
                              
                              <el-menu-item index="1-1-1" >三级菜单1</el-menu-item>
                              <el-menu-item index="1-1-2" >三级菜单2</el-menu-item>
                              <el-menu-item index="1-1-3">三级菜单3</el-menu-item>
                              <el-menu-item index="1-1-4">三级菜单4</el-menu-item>
                           </el-submenu>

                           <el-submenu index="1-2">
                              <template slot="title">生活电器</template>
                              <el-menu-item index="1-2-1">三级菜单1</el-menu-item>
                              <el-menu-item index="1-2-2">三级菜单2</el-menu-item>
                           </el-submenu>

                           <el-submenu index="1-3">
                              <template slot="title">测试分类</template>
                              <el-menu-item index="1-3-1">三级菜单11</el-menu-item>
                           </el-submenu>
                        </el-submenu>
                     </el-menu>
                 </li>
             </ul> -->
             
        </div>
    </div>
</div>
</template>

<script>
export default {
//  methods: {
//       handleSelect(key, keyPath){
//           console.log(key, keyPath);
//           if (key == '1-1-1'){
//             this.currentView = 'componnts'
//           } 
//         },
//         handleOpen(key){
//           this.default_openeds_array.push(key);
//         },
     
//     },
    created(){
        // 请求分类管理数据
        // this.getClassifyAction();
        this.$store.dispatch('shop/getClassifyAction')
    },
    // methods:{
    //      getClassifyAction(){
    //          this.axios
    //          .post("http://192.168.1.237:7523/egApiShop/getProductCategoryInfo")
    //          .then(res => {
    //              if(res.status === 200 && res.statusText === "ok"){
    //                  console.log("ok")
    //              }else{
    //                  console.log("no")
    //              }
    //          })
    //      },
         
    // }
}
</script>

<style lang="scss" scoped>
    #classify{
           
           .main{
                    margin-top: 26px;
                    box-sizing: border-box;
                       .nav{
                        width: 1180px;
                        height: 48px;
                        line-height: 48px;
                        color: #494e52;
                        font-weight: bold;
                        font-size: 14px;
                        border-bottom: 1px solid #eeefef; 
                        background: linear-gradient(#fefefe,#f5f5f5);
                        display: flex;
                        justify-content: space-between;
                        padding: 0 150px;
                        box-sizing: border-box;
                       }

                }
           .content{
                  
                  li{
                          width: 1180px;
                          border-bottom: 1px solid #efefef;
                             .title{
                                a{
                                   position: relative;
                                   right: 0;
                                }
                             }
                  }
           }
  }
</style>

