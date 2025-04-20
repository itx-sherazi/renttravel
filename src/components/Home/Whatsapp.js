// components/WhatsappButton.js
export default function WhatsappButton() {
    return (
      <a
  href="https://wa.me/212663203366?text=Hello%2C%20I%20am%20interested%20in%20renting%20a%20car.%20Please%20provide%20more%20information."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
      >
        {/* WhatsApp Icon - Heroicons example */}
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12a11.87 11.87 0 0 0 1.6 6L0 24l6.3-1.65A11.85 11.85 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.51 17.7c-1.83 0-3.6-.49-5.13-1.42l-.37-.22-3.74.98.99-3.65-.24-.38A9.36 9.36 0 0 1 2.4 12c0-5.28 4.32-9.6 9.6-9.6 2.56 0 4.96 1 6.77 2.83a9.52 9.52 0 0 1 2.83 6.77c0 5.28-4.32 9.6-9.6 9.6zm5.24-7.21c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.32-1.45-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.87-2.1-.23-.56-.46-.48-.64-.48H8.1c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.02 3.09 4.91 4.34.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.13-.26-.21-.55-.36z" />
        </svg>
      </a>
    );
  }
  