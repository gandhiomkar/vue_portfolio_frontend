<template>
  <div class="container flex">
    <div class="col-md-9 mb-md-0 mb-5">
      <form @submit.prevent="submit()" id="contact-form" name="contact-form">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-md-6">
            <div class="md-form mb-0">
              <input
                type="text"
                id="name"
                name="name"
                v-model="name"
                class="form-control"
              />
              <label for="name" class="">Your name</label>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-6">
            <div class="md-form mb-0">
              <input
                type="text"
                id="email"
                name="email"
                v-model="email"
                class="form-control"
              />
              <label for="email" class="">Your email</label>
            </div>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->

        <!--Grid row-->
        <div class="row">
          <div class="col-md-12">
            <div class="md-form mb-0">
              <input
                type="text"
                id="subject"
                name="subject"
                v-model="subject"
                class="form-control"
              />
              <label for="subject" class="">Subject</label>
            </div>
          </div>
        </div>
        <!--Grid row-->

        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-md-12">
            <div class="md-form">
              <textarea
                type="text"
                id="message"
                name="message"
                v-model="message"
                rows="2"
                class="form-control md-textarea"
              ></textarea>
              <label for="message">Your message</label>
            </div>
          </div>
        </div>
        <!--Grid row-->
        <!-- </form> -->

        <div class="text-center col-md-12">
          <input type="submit" class="btn btn-primary col-md-12" value="Send" />
        </div>
      </form>
      <div class="status"></div>
    </div>
    <!--Grid column-->
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    submit() {
      // Handle form submission logic here
      console.log(this.name);
      console.log(this.email);
      console.log(this.subject);
      console.log(this.message);
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>
