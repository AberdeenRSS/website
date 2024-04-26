### Things to keep up to date.

1. Upcoming/Past Launches page
    Add/Update launches by going to editing file in src/data/launches.js and adding a new object to the **top** of the array.

    >[!TIP]
    >You can do this directly in Github in your browser! Just click on the file and edit it!
    >When you save it will ask you to make a new branch, do that and then make a pull request.

    You can copy paste this above the existing entries and edit the details.

    ```{   
        upcoming:false,
        launchDate: '14 Oct 2023',
        launchSite: 'Alford, Scotland',
        altitude: '-0.5m',
        link: 'https://www.youtube.com/shorts/C2kzfUOwsMI'
    },```
    where:
    - upcoming: true/false
    - launchDate: 'DD MMM YYYY'
    - launchSite: 'Location'
    - altitude: 'Altitude'
    - link: 'Link to video'

2. Solid rocket launch record page (if needed)
3. Any new projects or pages that are added to the website.

### Making Changes
If you want to make changes to the website, make a new branch to make your changes on. 

1. Click on "Current banch" and choose "New branch" and give it a name.

2. Make sure your new branch is the current one, and make your changes. Try to commit often if it is a large change. You can publish the branch if you like and other people can work with you or you can access it from a different computer.

> [!IMPORTANT]
> If you just edited markdown and dont want to rebuild the site, add ```[skip ci]``` to the commit message.

3. When you finish a change (or part of a change) you can commit it, write a short summary of the change and then press commit, and then push origin. This will push your changes to the branch on Github.

Deploying a change:

1. Make a Pull Request to merge your branch with master.

> [!IMPORTANT]
> If you just edited markdown and dont want to rebuild the site, add ```[skip ci]``` to the commit message.

2. Post the Pull Request URL to #pull-requests channel in discord and ask someone to review your changes.

3. When your changes are approved, merge the Pull request to master and it will deploy your changes to the website :).