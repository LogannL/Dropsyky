<template>
    <div class="container-fluid">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <h2>Explain your project here</h2>
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <label>
                                    <input 
                                        type="radio"
                                        id="male"
                                        value="Male"
                                        v-model="userData.gender"> Male
                                </label>
                                <label>
                                    <input 
                                        type="radio"
                                        id="female"
                                        value="Female"
                                        v-model="userData.gender"> Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input 
                            type="text"
                            id="firstName"
                            class="form-control"
                            v-model="userData.firstName">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input 
                            type="text"
                            id="lastName"
                            class="form-control"
                            v-model="userData.lastName">
                    </div>
                    <div class="form-group">
                        <label for="age">Your Age</label>
                        <input 
                            type="number"
                            id="age"
                            class="form-control"
                            min="0"
                            v-model="userData.age"
                            >
                    </div>
                    <div class="form-group">
                        <label for="email">Your Email</label>
                        <input 
                            type="email"
                            id="email"
                            class="form-control"
                            v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="availability">Availability</label>
                        <input 
                            type="text"
                            id="availability"
                            class="form-control"
                            v-model="availability">
                    </div>
                    <div class="form-group">
                        <label for="project">Explain Your Project Here</label>
                        <textarea 
                            id="project"
                            rows="10"
                            class="form-control"
                            v-model="project"></textarea>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-md-6">
                            <button 
                                class="btn btn-primary"
                                @click.prevent="generatePDF">Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import jsPDF from 'jsdf';
export default {
    data(){
        return {
            userData: {
                firstName: '',
                lastName: '',
                age: '',
                email: '',
                gender: 'Male'
            },
            availability: '',
            project: ''
        }
    },
    methods: {
        generatePDF() {
            let userData = this.userData;
            let fullName = this.userData.firstName + this.userData.lastName.charAt(0).toUpperCase() + 
                            this.userData.lastName.slice(1);
            let pdfName = fullName + '_Project';
            const doc = new jsPDF('p', 'mm', 'a4');
            doc.text(10, 10, 'Nom : ' + userData.firstName);
            doc.text(10, 20, 'Prénom : ' + userData.lastName);
            doc.text(10, 30, 'Age : ' + userData.age);
            doc.text(10, 40, 'Mail : ' + userData.email);
            doc.text(10, 50, 'Sexe : ' + userData.gender + ' ans');
            doc.text(10, 60, 'Disponibilité : ' + this.availability);
            doc.text(10, 70, 'Description du projet : ' + this.project);
            doc.save(pdfName + '.pdf'); 
        }
    }
}
</script>
<style scoped>
</style>