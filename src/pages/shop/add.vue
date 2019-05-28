<template>
<div class="contaniar">
    <div id="add">
        <ul class="top-nav">
           <li><router-link to="/shop/classify">管理</router-link> </li>
           <li>
            <router-link to="/shop/add">新增</router-link>   
           </li>
        </ul>
         <form class="add-main">
             名称：<input class="form-control input-sm" data-val="true" data-val-maxlength="分类名称不能多于12个字符" 
             data-val-maxlength-max="12" data-val-regex="分类名称不能包含 &lt;>&#39;/\~&quot;" 
             data-val-regex-pattern="^[^&lt;>&#39;/\~&quot;]+$" data-val-required="分类名称必填,且不能多于12个字符" 
             id="Name" name="Name" type="text" value="" /><br/>
             图片：<input class="file" type="file" size="30" name="fileselect[]" multiple=false /><!--选择文件-->
         </form>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#add{
    .add-main{
        text-align: center;
        width: 500px;
        border: 1px solid red;
         .txt{
              width: 200px;
              outline: none;
         }
         .file{
             width: 175px;
             
         }
    }
}
</style>

