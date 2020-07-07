<template>
<div>
    <h2>{{ msg }}</h2>
    <p>{{ $route.params.newsId }} - {{ $route.params.newsTitle }}</p>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            msg:'params page'
        }
    }
}
</script>

