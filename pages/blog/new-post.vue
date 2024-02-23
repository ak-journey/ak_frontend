<script setup>
const title = ref("");
const body = ref("");

const submitForm = () => {
  console.log("Form submitted", title.value, body.value);
};
</script>

<template>
  <div class="section">
    <div class="content">
      <div class="box container is-max-desktop">
        <form v-on:submit.prevent="submitForm" method="post">
          <h1 class="title">Новый пост</h1>
          <div class="field">
            <label class="label">Заголовок</label>
            <div class="control">
              <input
                v-model="title"
                class="input"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Содержание</label>
            <div class="control">
<!--               <quill-editor
                v-model:content="body"
                content="String"
                contentType="html"
                style="height: 250px"
                theme="snow"
                toolbar="full"
              ></quill-editor> -->
              <textarea name="post" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Изображение</label>
            <div class="control">
              <div class="file has-name">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume" />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label"> Выберите изображение… </span>
                  </span>
                  <span class="file-name">
                    Screen Shot 2017-07-29 at 15.54.25.png
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Статус</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Черновик</option>
                  <option>Опубликован</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Добавить</button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Отменить</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>