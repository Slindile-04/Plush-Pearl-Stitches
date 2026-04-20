# Plush Pearl Stitches

A beautiful Django-based e-commerce website showcasing handmade crochet items for a small entrepreneur.

---

## 📋 Project Overview

**Plush Pearl Stitches** is a Django web application designed to display and promote handmade crochet items on the web. Originally built as an Instagram-based business, this website provides a professional online presence for selling unique, high-quality crochet products.

The project was created as a learning experience to understand the Django framework, web development best practices, and the process of hosting real-world client projects on the internet. It combines simplicity with functionality to create an efficient platform for both customers and the business owner.

---

## ✨ Features

- **Built with Django Framework** – A robust and scalable Python web framework
- **Hosted on PythonAnywhere** – Easy deployment and hosting for Python applications
- **Clean & User-Friendly UI** – Intuitive design focused on user experience
- **Fully Responsive Design** – Works seamlessly on desktop, tablet, and mobile devices
- **Product Showcase** – Attractive slider cards to display crochet items
- **Adaptive Layout** – CSS and JavaScript ensure the design adapts gracefully across all screen sizes
- **Fast & Lightweight** – Optimized performance for quick loading times

---

## 🛠️ Technologies Used

- **Django** – Python web framework for backend development
- **HTML5** – Structure and semantic markup
- **CSS3** – Styling and responsive design
- **JavaScript** – Interactive frontend features
- **PythonAnywhere** – Cloud hosting platform
- **Git** – Version control system
- **SQLite** – Database (default Django database)

---

## 📁 Project Structure

```
plush_pearl/
├── plush_pearl/              # Main Django project settings
│   ├── __init__.py
│   ├── asgi.py              # ASGI configuration
│   ├── settings.py          # Project settings
│   ├── urls.py              # Main URL routing
│   └── wsgi.py              # WSGI configuration
├── products/                 # Main Django app
│   ├── migrations/          # Database migrations
│   ├── templates/
│   │   └── products/
│   │       └── index.html   # Main template
│   ├── __init__.py
│   ├── admin.py             # Django admin configuration
│   ├── apps.py              # App configuration
│   ├── models.py            # Database models
│   ├── tests.py             # Unit tests
│   ├── urls.py              # App URL routing
│   └── views.py             # View logic
├── static/                   # Static files (CSS, JS, images)
│   ├── css/
│   │   └── style.css        # Main stylesheet
│   ├── js/
│   │   └── script.js        # JavaScript functionality
│   └── images/              # Image assets
├── manage.py                # Django management commands
├── db.sqlite3               # SQLite database
├── requirements.txt         # Python dependencies
└── README.md                # This file
```

---

## 🚀 How to Run the Project

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/plush-pearl-stitches.git
   cd plush_pearl
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Apply Database Migrations**
   ```bash
   python manage.py migrate
   ```

4. **Run the Development Server**
   ```bash
   python manage.py runserver
   ```

5. **Access the Application**
   Open your web browser and navigate to:
   ```
   http://127.0.0.1:8000/
   ```

### Creating a Superuser (Optional)
To access the Django admin panel:
```bash
python manage.py createsuperuser
```
Then visit `http://127.0.0.1:8000/admin/` to manage products and content.

---

## 🔮 Future Improvements

- **Expand Hosting** – Scale beyond PythonAnywhere's free tier to more powerful servers as the business grows
- **Database Integration** – Add user authentication and customer profiles for personalized experiences
- **E-Commerce Features** – Implement shopping cart and payment processing functionality
- **Performance Optimization** – Add caching, image optimization, and CDN integration
- **SEO Enhancement** – Improve search engine visibility with structured data and meta tags
- **Analytics** – Integrate Google Analytics and conversion tracking
- **Mobile App** – Develop a companion mobile app for better accessibility

---

---

## ⚠️ Known Issue

At present, there is a limitation affecting JavaScript execution on desktop browsers, which may impact certain interactive elements of the application.

The website is currently optimized for mobile viewing, where all core features function as expected.

A fix for this issue is planned and will be implemented in a future update.

---

## 👨‍💻 Author

**Silindile Mnisi**

This project was created as a learning exercise to explore:
- Django framework fundamentals
- Web development best practices
- Real-world client project deployment
- Building professional user interfaces

Feel free to reach out for questions or collaboration opportunities!

And here's the link for the website: https://mnisi.pythonanywhere.com/

---

## 📝 License

This project is open source. Feel free to use it as a reference or learning material.

---

## 📞 Support

For issues, questions, or suggestions, please feel free to open an issue on GitHub or contact the author directly.

Happy coding! 🎉
