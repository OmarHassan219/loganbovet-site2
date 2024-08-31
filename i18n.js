import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale)) {
    return notFound(); // Ensure to return the result of `notFound()`
  }

  try {
    // Dynamically import the locale messages
    const messages = (await import(`./messages/${locale}.json`)).default;
    return { messages };
  } catch (error) {
    console.error(`Failed to load messages for locale "${locale}":`, error);
    return notFound(); // Handle the case where the messages file is not found
  }
});
