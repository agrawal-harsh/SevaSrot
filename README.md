### SevaSrot Website Documentation

## Project Overview

SevaSrot is a comprehensive website for a cow welfare organization built using Next.js and shadcn/ui components. The website aims to raise awareness about cow welfare, facilitate donations, enable volunteer registration, and provide transparency about the organization's activities and finances.

## Architecture

The application follows a modern React architecture using Next.js App Router with a component-based structure. It implements server and client components appropriately to optimize performance and user experience.

## Data Flow Diagram

![Editor _ Mermaid Chart-2025-03-26-054814](https://github.com/user-attachments/assets/8ef56f1d-d536-4117-b70f-dfd912d09c51)
)


## Core Features

1. **Multilingual Support**: English and Hindi language options with seamless switching
2. **Theme Toggle**: Light and dark mode support
3. **Donation System**: Complete donation flow with form, payment options, and certificate generation
4. **Sevak (Volunteer) Registration**: Comprehensive registration form for volunteers
5. **Transparency Portal**: Financial reports, project updates, locations, and team information
6. **Awareness Content**: Educational materials about cow welfare
7. **Homepage Components**:

1. Emergency fund appeal
2. Donation impact slider
3. Donation counter
4. Sevak showcase
5. Testimonials
6. Latest news





## Component Structure

### Core Components

- **Layout**: Main layout wrapper with header, footer, and content area
- **Header**: Navigation, language switcher, theme toggle, and mobile menu
- **Footer**: Site information, quick links, contact details, and newsletter signup
- **CookieConsent**: Cookie consent notification
- **LanguageProvider**: Context provider for multilingual support
- **ThemeProvider**: Theme management for light/dark mode


### Page Components

- **Homepage**: Landing page with multiple sections showcasing the organization's work
- **Donate**: Donation page with form and information about donation impact
- **BecomeSevak**: Volunteer registration page with form and information
- **Awareness**: Educational content about cow welfare
- **Transparency**: Financial reports, project updates, locations, and team information


### Feature Components

- **DonationForm**: Form for processing donations with multiple payment options
- **DonationCertificate**: Certificate generator for completed donations
- **SevakRegistrationForm**: Form for volunteer registration
- **EmergencyFund**: Appeal for urgent funding with progress bar
- **DonationImpactSlider**: Interactive slider showing impact of different donation amounts
- **DonationCounter**: Real-time donation progress tracker
- **SevakShowcase**: Carousel of volunteer profiles
- **TestimonialSection**: Testimonials from donors and volunteers
- **NewsSection**: Latest news and updates


## Routing Structure

The website uses Next.js App Router with the following route structure:

- `/` - Homepage
- `/donate` - Donation page
- `/become-sevak` - Volunteer registration
- `/awareness` - Educational content
- `/transparency` - Transparency portal
- `/impact` - Impact stories (linked but not implemented)
- `/about` - About page (linked but not implemented)


## Data Flow

1. **User Authentication**: Not implemented in current version but prepared for future integration
2. **Form Submissions**:

1. Donation form data is processed and generates a donation certificate
2. Sevak registration form data is processed and shows confirmation
3. Newsletter signup in footer processes email subscriptions



3. **Content Display**:

1. Static content is rendered from page components
2. Dynamic content (news, testimonials, etc.) is simulated with mock data but prepared for API integration





## Technologies Used

- **Framework**: Next.js 14+ with App Router
- **UI Components**: shadcn/ui component library
- **Styling**: Tailwind CSS with custom configuration
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Context API for global state (language, theme)
- **Icons**: Lucide React icons
- **Fonts**: Inter font from Google Fonts


## Technical Implementation Details

### Internationalization

The website implements a custom language provider using React Context API to support English and Hindi languages. The language switcher in the header allows users to toggle between languages, and the preference is stored in localStorage.

```typescript
// Language Provider implementation
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "hi")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language]
    }
    // Return the key if translation not found
    return key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
```

### Theming

The website uses the Next.js theme provider for light and dark mode support. The theme toggle in the header allows users to switch between light, dark, and system preference.

```typescript
// Theme toggle implementation
export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-none">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### Form Handling

Forms are implemented using React Hook Form with Zod validation for robust form handling and validation. The donation form and sevak registration form both use this approach.

```typescript
// Form implementation example
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  // Additional fields...
})

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    firstName: "",
    lastName: "",
    email: "",
    // Additional defaults...
  }
})
```

### Responsive Design

The website is fully responsive, adapting to different screen sizes from mobile to desktop. This is achieved using Tailwind CSS's responsive utilities and custom component designs.

```html
<!-- Responsive design example -->
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <!-- Content adapts to screen size -->
</div>
```

## Setup and Deployment

### Prerequisites

- Node.js 18.x or higher
- npm or yarn


### Installation

1. Clone the repository
2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser


### Deployment

The website can be deployed on Vercel with the following steps:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel
3. Configure environment variables if needed
4. Deploy


## Future Enhancements

1. **Backend Integration**: Connect forms to a backend API for processing real data
2. **Authentication**: Add user authentication for donors and volunteers
3. **Payment Gateway**: Integrate a real payment gateway for donations
4. **CMS Integration**: Add a CMS for managing content
5. **Analytics**: Implement analytics to track user behavior and donation patterns
6. **Email Notifications**: Send confirmation emails for donations and registrations
7. **Blog Section**: Add a blog for sharing news and stories
8. **Social Media Integration**: Add social sharing and feeds


## Conclusion

The SevaSrot website provides a comprehensive platform for the cow welfare organization to showcase their work, collect donations, register volunteers, and educate the public about cow welfare. The modular architecture allows for easy maintenance and f
