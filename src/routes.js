import Header from './components/Header.vue'
import AboutMe from './components/AboutMe.vue';
import Contact from './components/Contact.vue';
import Book from './components/Book.vue';
import Home from './App.vue';

export const routes = [
    { path: '', name:'home', components: {
        default: Home,
        'home-top': Header 
    }},
    { path: 'npm', name:'home', components: {
        default: Home
    }},
    {path: '/aboutMe', name: 'aboutMe', components: {
        default: AboutMe,
        'presentation-page': AboutMe
    }},
    { path: '/contact', name: 'contact', components: {
        default: Contact,
        'contact-form': Contact
    }},
    {path: '/book', name: 'book', components: {
        default: Book,
        'book': Book
    }}
];