import * as React from "react";
import { Loader, XIcon } from "lucide-react";

import {
  Autocomplete,
  AutocompleteClear,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteStatus,
  useFilter,
} from "@/registry/default/ui/autocomplete";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

interface Country {
  id: string;
  name: string;
  region: string;
}

const countries: Country[] = [
  { id: "1", name: "Philippines", region: "Asia" },
  { id: "2", name: "United States", region: "North America" },
  { id: "3", name: "Canada", region: "North America" },
  { id: "4", name: "Japan", region: "Asia" },
  { id: "5", name: "Germany", region: "Europe" },
  { id: "6", name: "France", region: "Europe" },
  { id: "7", name: "Brazil", region: "South America" },
  { id: "8", name: "Australia", region: "Oceania" },
  { id: "9", name: "Egypt", region: "Africa" },
  { id: "10", name: "South Africa", region: "Africa" },
  { id: "11", name: "India", region: "Asia" },
  { id: "12", name: "China", region: "Asia" },
  { id: "13", name: "South Korea", region: "Asia" },
  { id: "14", name: "Italy", region: "Europe" },
  { id: "15", name: "Spain", region: "Europe" },
  { id: "16", name: "United Kingdom", region: "Europe" },
  { id: "17", name: "Mexico", region: "North America" },
  { id: "18", name: "Argentina", region: "South America" },
  { id: "19", name: "Chile", region: "South America" },
  { id: "20", name: "Nigeria", region: "Africa" },
  { id: "21", name: "Kenya", region: "Africa" },
  { id: "22", name: "Saudi Arabia", region: "Asia" },
  { id: "23", name: "United Arab Emirates", region: "Asia" },
  { id: "24", name: "Turkey", region: "Europe/Asia" },
  { id: "25", name: "Russia", region: "Europe/Asia" },
  { id: "26", name: "Sweden", region: "Europe" },
  { id: "27", name: "Norway", region: "Europe" },
  { id: "28", name: "New Zealand", region: "Oceania" },
  { id: "29", name: "Thailand", region: "Asia" },
  { id: "30", name: "Vietnam", region: "Asia" },
];

export default function AutocompleteAsyncSearch() {
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState<Country[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  const { contains } = useFilter({ sensitivity: "base" });

  React.useEffect(() => {
    if (!searchValue) {
      setSearchResults([]);
      setIsLoading(false);
      return undefined;
    }

    setIsLoading(true);
    setError(null);

    let ignore = false;

    async function fetchCountries() {
      try {
        const results = await searchCountries(searchValue, contains);
        if (!ignore) {
          setSearchResults(results);
        }
      } catch (err) {
        if (!ignore) {
          setError("Failed to fetch countries. Please try again.");
          setSearchResults([]);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    const timeoutId = setTimeout(fetchCountries, 300);

    return () => {
      clearTimeout(timeoutId);
      ignore = true;
    };
  }, [searchValue, contains]);

  let status: React.ReactNode = `${searchResults.length} result${searchResults.length === 1 ? "" : "s"} found`;
  if (isLoading) {
    status = (
      <React.Fragment>
        <Loader className="animate-spin" />
        Searching...
      </React.Fragment>
    );
  } else if (error) {
    status = error;
  } else if (searchResults.length === 0 && searchValue) {
    status = `Country or region "${searchValue}" does not exist in the list of countries`;
  }

  const shouldRenderPopup = searchValue !== "";

  return (
    <Autocomplete
      items={searchResults}
      value={searchValue}
      onValueChange={setSearchValue}
      itemToStringValue={(item) => item.name}
      filter={null}
    >
      <AutocompleteInput
        render={(props) => (
          <Label className="flex w-full max-w-2xs flex-col gap-2">
            Search country or region
            <div className="relative">
              <Input placeholder="e.g. Japan or Europe" {...props} />
              <AutocompleteClear
                render={
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-[50%] left-[94%] translate-x-[-50%] translate-y-[-50%] [&]:size-5"
                  >
                    <XIcon className="size-3.5" />
                  </Button>
                }
              />
            </div>
          </Label>
        )}
      />
      {shouldRenderPopup && (
        <AutocompleteContent>
          <AutocompleteStatus>{status}</AutocompleteStatus>
          <AutocompleteList>
            {(country: Country) => (
              <AutocompleteItem key={country.id} value={country}>
                <div className="leading-5 font-medium">
                  {country.name}
                  <span className="text-primary-foreground bg-primary ml-2 inline-block rounded-full px-1.5 py-[1px] text-xs leading-4 font-normal">
                    {country.region}
                  </span>
                </div>
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      )}
    </Autocomplete>
  );
}

// Simulates an async API call to search countries by name or region
async function searchCountries(
  query: string,
  filter: (item: string, query: string) => boolean
): Promise<Country[]> {
  // Simulate network delay (random between 100–600ms)
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 500 + 100)
  );

  // Simulate occasional network errors (1% chance or if query === "will_error")
  if (Math.random() < 0.01 || query === "will_error") {
    throw new Error("Network error");
  }

  // Return filtered results:
  // match either by country name or region against the query
  return countries.filter(
    (country) => filter(country.name, query) || filter(country.region, query)
  );
}
