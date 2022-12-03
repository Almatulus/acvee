<template>
  <div class="document">
    <div class="document__inner">
      <label>+ Добавить документ
        <input class="document__send" type="file" id="file" ref="file" :value="value" v-on:change="handleFileUpload()"/>
      </label>
        <!--<button class="document__button button" v-on:click="submitFile()">Загрузить файл</button>-->
      <div class="document__preview">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        file: '',

      }
    },
    props: ['value'],
    methods: {
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
        
      },
      submitFile(){
        let formData = new FormData();
        formData.append('file', this.file);
        
        axios.post( '/test',
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },
    }
  }
</script>

<style lang="scss">
  .document {

		&__inner {
      margin: 100px 0 0 0;
		}

		&__send {
      opacity: 0;
		}

		&__button {
      display: inline-block;
		}

    label{
      margin: 30px 0 0 0;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #0345FF;
      cursor: pointer;
    }
}
.button {
}

</style>