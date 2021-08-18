<template><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1>
<p>Swork插件基于<a href="https://zeroing.jd.com/micro-app/docs.html#/zh-cn/start" target="_blank" rel="noopener noreferrer">micro-app<OutboundLink/></a>编写,相关文档可参照micro-app文档，swork插件对于此进行了一些更改，暴露出<code>swork</code>常用的api,store,和ui组件，
稍后我们将会为您详细的介绍它。</p>
<h1 id="它是如何工作的" tabindex="-1"><a class="header-anchor" href="#它是如何工作的" aria-hidden="true">#</a> 它是如何工作的？</h1>
<p>正如上述所说，swork插件系统是基于微服务的，将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用，各个前端应用还可以独立开发、独立运行、独立部署。微前端可以有效的解决项目越来越复杂而难以维护的问题。</p>
<p>在构建时，程序会将组件转换为web-components标签插入dom列表中，通过CustomElement结合自定义的ShadowDom，将微前端封装成一个类WebComponent组件，从而实现微前端的组件化渲染。并且由于自定义ShadowDom的隔离特性，不需要像其他微服务框架一样要求子应用修改渲染逻辑并暴露出方法，也不需要修改webpack配置，是目前市面上接入微前端成本最低的方案。</p>
<h1 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h1>
<p>iview</p>
</template>
