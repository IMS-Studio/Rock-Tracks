# About Rock Tracks

The source code is in the src/ directory, where the source is distributed among different directories

- assets (For containing all icons)
- components (For containing components)
- mock (For containing any mock data. In our case, data provided in assignment for apple. URL provided was downloading the file instead of printing out the JSON as response. So I had to download an store it locally)
- navigation (For handling the routing)
- redux (For containing all redux reducers and store)
- screens (For containing all screens)
- services (For containing any API calls)
- theme (For containing icons, fonts, colors etc.)

## Apple API call

The API call was returning a file instead of returning JSON response. That had to be stored locally therefore. I have downloaded that file and stored that in the mock directory. That response is first stored in Redux and then used across the app.

## Improvements

In our scenario, I think the following improvements can be made

1. UI Design
2. Playing the preview of audio right from our website
3. If we can request the data from API, we can use fetch for that purpose instead of file storing
4. We can store user's data

</a>
