# ![GIF OF DEMO](https://i.imgur.com/J2iznmk.png)

# <p align="center">
  <img width="800" height="500" src="https://i.imgur.com/hlvkYVt.png">
</p>

## About

*Tour Guide* is a React-Native application that alows the touring musician to keep the itinerary of each show date in one, easily reference-able place. <br />

 Each date is organized into flight info, hotel info, and event info. 
 <br />


# Tech Stack 
*Tour Guide* was built with React-Native.

## Technologies

<img src="http://www.nexfaktor.net/wp-repo/uploads/2017/01/logo-react-native.png" width="65"/>


### Technical Challenges/Research
Some unexpected challenges encountered while building this app:
- Compilation conflicts with linting when using libraries such as moment.js
- Compartmentalizing various feature builds across many developers with minimal conflict
- Implementation of OAuth brought about interesting and unforseen challenges

As a team, we gained experience with large-scale SQL manipulation, with utilizing cron jobs, with cross-component Material-UI, and with building efficient data compatibility layers.


# Client Deliverables
Our team developed the following user stories to track deliverables and meet the expectations of our client:

#### User Stories
* As a user I should see suggestions for activities to do during my free time
* As a user I would like to see suggestions for what to do during the next three days
* As a user I do not want to be overwhelmed by choices on the initial visit to the page
* As a user I want an application that integrates with my Google Calendar
* As a user I do not want to see events that occur during times I am busy
* As a user I should be able to click a button to add an event directly to my calendar
* As a user I should be able to indicate my preference for what types of events I do and do not want to see
* As a user I should be able to indicate times I am unavailable that are not already on my Google Calendar
* As a user I should be able to reject a suggested event and be presented with a different event for that day
* As a user I should be able to browse all events on a given day
* As a user I should be able to browse all events available on all days

## Minimum Viable Product (MVP)

The MVP of the app retrieves events from multiple APIs, and displays events which fit users' free time availability and category selection preferences. Users can choose to add an event to their calendar, to reject an event from the list, and to modify their categories in settings.

### How the App Works:
![GIF OF DEMO](https://media.giphy.com/media/Yq8XBJUsoPTHaFkc7p/giphy.gif)

![IMG OF SCHEMA](https://raw.githubusercontent.com/hratx-blue-ocean/blue512/development/db/Schema.png)


### Development Workflow
Our team managed workflow and responsibilities by utilizing Agile methodology. [Trello](https://trello.com/b/G4xL0tnR/cityscout) was used to to keep track of tickets. All development work was specifically associated with a ticket. At any point in time the status of a ticket could be ascertained by finding it on the board. After our daily standup meeting we assessed the status of our application then updated and reassigned tickets based on workload.

### Version Control and Continuous Integration
Our team utilized git feature branch workflow to ensure our master branch always contained working code. Our master and development branches blocked direct pushes of new code. Instead, developers would create feature branches off the development branch, then create pull requests into development upon completion of that feature.

All pull requests required review by another developer prior to merging new features into development. Our team utilized Travis CI for continuous integration. We integrated Travis with GitHub, allowing reviewers to easily ensure the branch they were reviewing had passed our testing suite. Pull requests with failed tests were barred from merging, and required the developer who opened the request to resolve the issue. The development branch was only merged into master after significant testing and approval by the entire team. This ensured our deployed build was never broken.
