<template>
<div>
    <!-- 顶部导航栏 -->
     <div class="tabs contaniar">
           <li class="plat">
                 <span>宜居云电商平台</span>
          </li>
          <li class="tab">
               <router-link to="/home">
         
              <span class="el-dropdown-link">首页</span>
                <ul class="drop" style="margin-left: -18px;">
                        <li v-for="item in navList1"
                                    :key="item.tabId"
                                    >{{item.tabName}}</li>
                      </ul>
               </router-link>
          </li>
            <li class="tab">
                      <router-link to="/shop">
                          <span class="el-dropdown-link" >商品</span>
                      </router-link>
                      <ul class="drop" style="margin-left: -18px;">
                            <li v-for="item in navList2"
                                        :key="item.tabId">
                                 <router-link :to="item.path">{{item.tabName}}</router-link>
                            </li>
                      </ul>
              
          </li>
            <li class="tab">
               <router-link to="/deal">
                      <span class="el-dropdown-link" >交易</span>
                      <ul class="drop" style="margin-left: -18px;">
                        <li v-for="(item,index) in navList3"
                                    :key="item.tabId"
                                    @click="selectMenuItem(index)"
                                    >{{item.tabName}} </li>
                      </ul>
               </router-link>
          </li>
          <li class="tab">
               <router-link to="/store">
                      <span class="el-dropdown-link">店铺</span>
                     <ul class="drop" style="margin-left: -18px;">
                        <li v-for="(item,index) in navList4"
                                    :key="item.tabId"
                                    @click="selectMenuItem(index)"
                                    >{{item.tabName}} </li>
                      </ul>
               </router-link>
          </li>
            <li class="tab">
               <router-link to="/statistics">
                      <span class="el-dropdown-link">统计</span>
                      <ul class="drop" style="margin-left: -18px;">
                        <li v-for="(item,index) in navList5"
                                    :key="item.tabId"
                                    @click="selectMenuItem(index)"
                                    >{{item.tabName}} </li>
                      </ul>
               </router-link>
          </li>
          <li class="tab">
               <router-link to="/website">
                      <span class="el-dropdown-link">网站</span>
                       <ul class="drop" style="margin-left: -18px;">
                        <li v-for="(item,index) in navList6"
                                    :key="item.tabId"
                                    @click="selectMenuItem(index)"
                                    >{{item.tabName}} </li>
                      </ul>
               </router-link>
          </li>
            <li class="tab">
               <router-link to="/distribution">
                      <span class="el-dropdown-link">分销</span>
                      <ul class="drop" style="margin-left: -18px;">
                        <li v-for="(item,index) in navList7"
                                    :key="item.tabId"
                                    @click="selectMenuItem(index)"
                                    >{{item.tabName}} </li>
                      </ul>
               </router-link>
          </li>
          <li class="tab">
               <router-link to="/system">
                      <span class="el-dropdown-link">系统</span>
                       <ul class="drop" style="margin-left: -18px;">
                        <li v-for="(item,index) in navList8"
                                    :key="item.tabId"
                                    @click="selectMenuItem(index)"
                                    >{{item.tabName}} </li>
                      </ul>
               </router-link>
          </li>
            <li class="tab">
               <router-link to="/marketing">
                      <span class="el-dropdown-link">营销</span>
                       <ul class="drop" style="margin-left: -18px;">
                        <li v-for="(item,index) in navList9"
                                    :key="item.tabId"
                                    @click="selectMenuItem(index)"
                                    >{{item.tabName}} </li>
                      </ul>
               </router-link>
          </li>
          <li class="tab">
               <router-link to="/microMall">
                      <span class="el-dropdown-link">微商城</span>
                      <ul class="drop" style="margin-left: -18px;">
                        <li v-for="(item,index) in navList10"
                                    :key="item.tabId"
                                    @click="selectMenuItem(index)"
                                    >{{item.tabName}} </li>
                      </ul>
               </router-link>
          </li>
            <li class="tab">
               <router-link to="/app">
                      <span class="el-dropdown-link">APP</span>
                      <ul class="drop" style="margin-left: -18px;">
                        <li v-for="(item,index) in navList11"
                                    :key="item.tabId"
                                    @click="selectMenuItem(index)"
                                    >{{item.tabName}} </li>
                      </ul>
               </router-link>
          </li>
          <li class="tab">
               <router-link to="/yjyshop">
                      <span class="el-dropdown-link">宜居云商店</span>
                     <ul class="drop" style="margin-left: -18px;">
                        <li v-for="(item,index) in navList12"
                                    :key="item.tabId"
                                    @click="selectMenuItem(index)"
                                    >{{item.tabName}} </li>
                      </ul>
               </router-link>
          </li>
            <li class="tab login">
               <router-link to="/login">
                 <span class="last">安全退出</span>
               </router-link>
          </li>
     </div>
     
     <!-- 左侧导航栏 -->
     <!-- <div class="leftNav">
             <li v-for="(item,index) in navList2"
               :key="item.tabId"
               :class="{active:index == selectIndex}"
               >{{item.tabName}}</li> 
     </div> -->
 </div>    
</template>

<script>
export default {
     name:'app-tab',
     data(){
        return{
             navList1:[
               { tabId: 1, tabName: "控制台" },
             ],
             navList2:[
               { tabId: 1, tabName: "商品管理",path:'/shop'},
               { tabId: 2, tabName: "分类管理",path:'/shop/classify'},
               { tabId: 3, tabName: "品牌管理",path:'/shop/brand'},
               { tabId: 4, tabName: "咨询管理",path:'/shop/advisory'},
               { tabId: 5, tabName: "评论管理",path:'/shop/discuss'}
             ],
             navList3:[
               { tabId: 1, tabName: "订单管理" },
               { tabId: 2, tabName: "退款处理" },
               { tabId: 3, tabName: "退货处理" },
               { tabId: 4, tabName: "交易评价" },
               { tabId: 5, tabName: "交易投诉" },
               { tabId: 6, tabName: "支付方式" },
               { tabId: 7, tabName: "快递单模板" },
               { tabId: 8, tabName: "交易设置" },
               { tabId: 9, tabName: "发票管理" }
             ],
             navList4:[
               { tabId: 1, tabName: "店铺管理" },
               { tabId: 2, tabName: "店铺套餐" },
               { tabId: 3, tabName: "财务管理" },
               { tabId: 4, tabName: "保证金管理" },
               { tabId: 5, tabName: "商家提现管理" },
             ],
             navList5:[
               { tabId: 1, tabName: "店铺统计" },
               { tabId: 2, tabName: "商品统计" },
               { tabId: 3, tabName: "交易统计" },
               
             ],
             navList6:[
               { tabId: 1, tabName: "页面设置" },
               { tabId: 2, tabName: "文章管理" },
               { tabId: 3, tabName: "文章分类" },
               { tabId: 4, tabName: "主题设置" },
               
             ],
             navList7:[
               { tabId: 1, tabName: "分销市场管理" },
               { tabId: 2, tabName: "销售员管理" },
               { tabId: 3, tabName: "分销业绩管理" },
               { tabId: 4, tabName: "分销首页设置" },
               
             ],
             navList8:[
               { tabId: 1, tabName: "站点设置" },
               { tabId: 2, tabName: "管理员" },
               { tabId: 3, tabName: "权限组" },
               { tabId: 4, tabName: "操作日志" },
               { tabId: 5, tabName: "消息设置" },
               { tabId: 6, tabName: "入驻设置" },
               { tabId: 7, tabName: "区域管理" },
               
             ],
             navList9:[
               { tabId: 1, tabName: "营销中心" },
               
               
             ],
             navList10:[
               { tabId: 1, tabName: "商城首页设置" },
               { tabId: 2, tabName: "微店管理" },
               { tabId: 3, tabName: "菜单设置" },
               { tabId: 4, tabName: "公众号设置" },
               { tabId: 5, tabName: "素菜管理" },
             ],
             navList11:[
               { tabId: 1, tabName: "APP首页配置" },
               { tabId: 2, tabName: "关于我们" },
               { tabId: 3, tabName: "APP引导页" },
             ],
             navList12:[
               { tabId: 1, tabName: "商品库管理" },
               { tabId: 2, tabName: "微店管理" },
               { tabId: 3, tabName: "佣金管理" },
               { tabId: 4, tabName: "提现管理" },
             ],
             selectIndex:1
            }
     },
     computed:{
     
    },
    methods: {
      selectMenuItem(index){
          
      },
      
    }
}
</script>

<style lang="scss" scoped>
// .leftNav{
//        width: 190px;
//        height: 100%;
//        text-align: center;
//        background: #efefef;
//        left: 10%;
//        padding-top: 20px;
//        box-sizing: border-box;
//        position: absolute;
//        top: 54px;
//        li {
//              width: 100%;
//              min-height: 48px;
//              line-height: 48px; 
//              border-bottom: 1px solid #dddddd;
//              cursor: pointer;
//         }
//   }
// .leftNav li:first-child{
//    border-top: 1px solid #dddddd;
// }
// .leftNav li:hover{
//   background: #e2e2e2;
// }
.tabs{
  position: relative;
  top: 0;
  display: flex;
  height: 54px;
  line-height: 54px;
  background: #333;
  justify-content: center;
  width: 100%;
  .tab{
     padding: 0 18px;
     height: 54px;
     text-align: center;
      .actived{
        border-bottom: 1px solid red;
      }
    span{
       font-size: 14px;
       color:#c2c5c9;
       display: inline-block;
       width: 100%;
       height: 100%;
    }
 }
   .plat{
     width: 182px;
     margin-right: 60px;
     padding: 0 18px;
     height: 54px;
     text-align: center;
   }
   .plat span{
      font-size: 18px;
      color: #fff;
   }
   .login{
     margin-left: 100px;
   }
}
.tab:hover{
   background:rgba(255,255,255,.2);
}
.tab:hover .lie{
  display: block;
}
.tab:hover span{
  color: #fff;
}

.tabs .drop{
  display: none;
  position: absolute;
  width: 130px;
  min-height: 36px;
  background:#fefefe;
  box-shadow: 2px 2px 3px #888888;
  margin-left: -18px;
    li {
        border-bottom: 1px solid #efefef;
        font-size: 14px;
        width: 130px;
        cursor: pointer;
        height: 36px;
        letter-spacing: 1.35px;
        line-height: 36px;
    }
}
.drop li:hover{
  background: #c2c5c9;
}
.drop li:last-child{
  border-bottom: 0;
}
.tabs .tab a .last::before{
  position: absolute;
	content: '';
  display: inline-block;
  width: 1px;
  height: 15px;
  top: 21px;
  margin-left: -10px;
  background:  #999999;
}
.tab:hover .drop{
  display: block;
}
</style>


