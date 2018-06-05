# react-people
react-people


## Project 1 - Bit People<br>

Tasks<br>
[bpt-1] Task 1<br>
Create documentation (structure/decomposition of the page) about the components before starting any development.<br> This documentation should be written in a README.md file of the project.<br>
[bpt-2] Task 2<br>
For the project use React framework and bootstrap it using CRA<br>
[bpt-3] Task 3<br>
App should have neat and understandable folders and file structure. All our code should live in a directory and contain following subfolders:<br>
/app<br>
Everything related to React components <br>
/entities<br>
Plain JavaScript constructor functions/ES6 classes, this folder is for objects like User, Post, Car<br>
/services<br>
Services related to our main entities<br>
/shared<br>
Place to store common methods (utils) and constants that are not UI-related<br>
[bpt-4] Task 4<br>
For style use MaterializeCSS a modern responsive front-end framework based on Material Design because it’s nice, clean and easy to use<br>
[bpt-5] Task 5<br>
I should be able to communicate (consume) the following web API in my application <br>
https://randomuser.me/api/?results=15<br>
Features<br>
[bpf-1] Feature 1<br>
As a user I should be able to see email of all my users always displayed as hidden showing only first 3 and last 3 letters of username, dots and domain<br>
Example: oliver.lewis@example.com -> oli...wis@example.com<br>
[bpf-2] Feature 2 <br>

As a user I should be able to see a LIST of users when my App is started<br>
Each list item should have displayed:<br>
avatar in circle<br>
full name<br>
email icon and hidden email address<br>
birth date in DD.MM.YYYY format<br>
[bpf-3] Feature 3<br>

As a user I should be able to see GRID of user cards when my App is started<br>
Each card item should have displayed:<br>
photo<br>
name<br>
hidden email address<br>
birth date in DD.MM.YYYY format<br>
    [bpf-4] Feature 4<br>

As a user I should be able to to switch users view between LIST and GRID view using list/grid button in the header
When the app starts, default view is the list view<br>
When I click on the grid button, I should be able to switch view type to grid style displaying cards of users<br>
When my view is in the grid mode, I should be able to see the list view icon instead of the grid icon and should be able to switch back to list view by clicking on it<br>
    [bpf-5] Feature 5<br>

As a user I should be able to refresh my user list/grid and get new users every time when I click refresh button in the header<br>
This action should update my users with new users<br>
    [bpf-6] Feature 6<br>
As a user when I refresh my page with browser refresh button, close tab and/or browser I should be able to keep my previously<br> set view mode (list or grid) when revisiting the page<br>
    [bpf-7] Feature 7<br>

As a user I want all cards or list items that are displaying information about female persons to be redish<br>

[bpf-8] Feature 8<br>

As a user I want to be able to filter users by name.<br>
Search should be dynamic meaning that user list should be updated while I’m typing in the search bar<br>
[bpf-9] Feature 9<br>
    

As a user I want to have loading screen while getting people for the first time or refreshing people list<br>
Search bar should also be hidden while loading <br>
You can find an example of this animation on this website tobiasahlin.com/spinkit/<br>

[bpf-10] Feature 10<br>
    
As a user I want to have an About page for my site. When I click on about menu item in the menu bar I should be able to visit the About page<br>
As a user I want to be able to go home from my About page by clicking on BIT People text<br>

[bpf-11] Feature 11<br>
As a user I want to be able to search my users by full name (first and last name)<br>
As a  user I want that my search is case insensitive<br>
As a user I want that first and last name of a person starts with a capital letter <br>
[bpf-12] Feature 12<br>

As a user I want to be able to see proper message if there are no people matching my search input<br>
[bpf-13] Feature 13<br>

As a user when I visit my app for the first time I want my people fetched, every next time when I visit my app I want to see<br> people from the last visit<br>
After the first time I should be able to refresh users only by clicking refresh button in the upper right corner<br>
As a user I want to see in the footer how long has passed since previous refresh<br>
1 minute ago, 20 minutes ago, Over an hour ago,  Two days ago, Over a week ago, One month ago, Over a month ago...<br>

[bpf-14] Feature 14<br>

As a user I would like to have stats about people below search bar<br>
When I’m searching stats should be updated also<br>

