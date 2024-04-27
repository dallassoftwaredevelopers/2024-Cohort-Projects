import { Link } from "react-router-dom";
import myImage from "../img.png";

function Home() {
  return (
    <>
      <section class="bg-green-100 dark:bg-green-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white">
              Your Pantry, Reimagined.
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">
              Effortlessly manage your grocery list, discover recipes, and savor
              the joy of home-cooked meals. With Pantry Pal, every ingredient
              counts, from the store to your door.
            </p>
            {/*Instead of an a tag, this would probably just be a link to the login page.*/}
            <a
              href="https://pantry-pal.azurewebsites.net/auth/google"
              className="inline-flex items-center justify-center pe-5 py-3 mr-3 text-base font-medium text-center text-text-green-600 rounded-lg focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
            >
              Start Simplifying
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="hidden lg:flex lg:col-span-5 lg:justify-center">
            <img src={myImage} class=" w-[85%]" alt="mockup"></img>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-200">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            ></img>
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            ></img>
          </div>
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-5 text-4xl tracking-tight font-extrabold text-green-700">
              Simplifying Your Grocery Game
            </h2>
            <p class="mb-5 text-gray-700">
              At Pantry Pal, we streamline your shopping and meal prep. Blending
              strategy, design, and tech, we craft a tool that's as efficient as
              it is easy to use—getting you from pantry to plate without the
              hassle.
            </p>
            <p class="mb-5 text-gray-700">
              Fresh thinking, simplified shopping.
            </p>
            <a
              href="https://pantry-pal.azurewebsites.net/auth/google"
              className="inline-flex items-center justify-center pe-5 mr-3 text-base font-medium text-center text-green-900 rounded-lg bg-primary-700 hover:text-sky-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Start Simplifying
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-green-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <div class="grid pt-8 text-left border-t border-gray-100 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What exactly is "Grocery Management" in the app?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Our Grocery Management feature allows you to input and track
                  the items in your pantry. You'll be able to see at a glance
                  what you have, what you’re running low on, and what you need
                  for your next grocery haul.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Is it possible to track my dietary needs with the app?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Definitely. Whether you're counting carbs, keeping an eye on
                  protein intake, or balancing fats, our app's macro counter and
                  recipe analyzer will help you stay on track with your dietary
                  goals, making healthy eating simpler.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How does the "Recipe Integration" work?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Select recipes you're interested in, and our app will
                  automatically cross-reference the ingredients with your
                  current pantry inventory. It'll then generate a shopping list
                  for any missing items, streamlining your meal prep planning.
                </p>
              </div>
            </div>
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Can the app suggest recipes based on what's already in my
                  fridge?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Absolutely! Just input the groceries you have, and our app
                  will suggest a variety of recipes you can make without needing
                  a trip to the store. It's perfect for those times you're
                  unsure what to cook with what you have.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What does "macro counter" mean for my recipes?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Each recipe in our app comes with a detailed breakdown of
                  macronutrients - that's your proteins, carbs, fats, and more.
                  It's designed to help you meet dietary goals and stay informed
                  about the nutritional content of your meals.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  You can use this version for any purposes, because it is
                  open-source under the MIT license.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Will the app help me with meal prepping?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Yes! Plan your meals like a pro with our meal prepping
                  feature. The app not only helps you organize your grocery list
                  by sorting what you need to buy for your weekly meal prep but
                  also tracks macros to keep your nutrition on point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
