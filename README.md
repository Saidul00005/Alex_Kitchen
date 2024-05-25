## Process to submit a Hotfix for "Alex Kitchen" Project

When you work on a project like "Alex Kitchen" and want to use Git for version control, then you should follow these conventions and steps to submit a hotfix:

### Naming the Hotfix Branch

In order to name the hotfix branch, you should follow a convention that clearly indicates the purpose of the branch. A typical naming convention for hotfix branches is `hotfix/<description>`. For example, if a person wants to fix a critical bug related to a Navigation bar issue, he/she should name that branch `hotfix/navbar-issue`.

### Steps to create a PR and merge the Hotfix Branch with the Production Branch

1. **Create the Hotfix Branch:**
   - First, ensure that you are on the main or production branch.
   - Pull the latest changes to ensure that main branch is up to date.
     ```sh
     git checkout main
     git pull origin main
     ```
   - Create a new branch for hotfix.
     ```sh
     git checkout -b hotfix/navbar-issue
     ```

2. **Implement the Hotfix:**
   - Make the necessary changes to fix the issue.
   - Stage and commit changes with a descriptive message.
     ```sh
     git add .
     git commit -m "Navbar menu's list-style related issue on different devices got fixed."
     ```

3. **Push the Hotfix Branch to the Remote Repository:**
   - Push hotfix branch to the remote repository.
     ```sh
     git push origin hotfix/navbar-issue
     ```

4. **Create a Pull Request (PR):**
   - First, you need to navigate to your repository on GitHub (or preferred Git hosting service).
   - Then, you should see a prompt to create a PR for your recently pushed branch. If not, navigate to the Pull Requests tab and click on "New pull request".
   - After that, select hotfix branch (`hotfix/navbar-issue`) as the source branch and the production branch (commonly `main` or `master`) as the target branch.
   - Provide a descriptive title and detailed description of the hotfix in the PR.
   - Request reviews from other team members if required by your workflow.

5. **Review and Approve the PR:**
   - Wait for team members to review your PR. Address any feedback or requested changes by making additional commits to your hotfix branch.
   - Once approved, you can proceed to merge the PR.

6. **Merge the PR:**
   - Ensure the PR checks (like CI/CD pipelines, automated tests) have passed.
   - Merge the PR into the production branch. This can usually be done by clicking the "Merge pull request" button on the GitHub PR page.
   - Depending on your workflow, you might choose "Squash and merge," "Rebase and merge," or a standard merge. For hotfixes, a standard merge is often appropriate.

7. **Post-Merge Steps:**
   - After merging, ensure to pull the latest changes from the production branch to keep your local repository up to date.
     ```sh
     git checkout main
     git pull origin main
     ```
   - Delete the hotfix branch from the remote repository if it’s no longer needed.
     ```sh
     git push origin --delete hotfix/payment-issue
     ```
   - Optionally, delete the local hotfix branch.
     ```sh
     git branch -d hotfix/payment-issue
     ```

By following these steps, you can effectively manage the submission and merging of a hotfix in a project using Git for version control.


## An organized example dataset for using in a project like "Alex Kitchen"

### Dataset:

```json
const Menu =
{
  "Vegetarian": {
    "Starters": [
      {id: 1, name: "Salad"},
      {id: 2, name: "Veg Burger"}
    ]
  },
  "Non-Vegetarian": {
    "Main Course": [
      {id: 4, name: "Chicken Wings"},
      {id: 5, name: "Beef Burger"}
    ]
  }
}
```

### Dataset description:

- Here, `Menu` is an object which has two other sub objects:
  - `Vegetarian`
  - `Non-Vegetarian`
- In `Vegetarian` object, there is an array of `Starters` which holds two objects that holds two properties:
  - `id`
  - `menu`
- In `Non-Vegetarian` object, there is an array of `Main course` which holds two objects that holds two properties:
  - `id`
  - `menu`

### Dataset Modification technique:

- If you want, you can add more objects like `Vegetarian` and `Non-Vegetarian` in Menu object.
- If you want, you can have more arrays like `Starters` and `Main Course` in `Vegetarian` and `Non-Vegetarian` object.
- If you want, you can also have more properties like `id` and `name` in objects of `Starters` and `Main Course` object.
- Let's think we want to add another object in `Menu` object which is `Foods for your pet` which has two arrays `Dog` and `Cat` where you can find more objects.Let's see the look of this update:

  ```json
  const Menu =
  {
    "Vegetarian": {
      "Starters": [
        {id: 1, name: "Salad"},
        {id: 2, name: "Veg Burger"}
      ]
    },
    "Non-Vegetarian": {
      "Main Course": [
        {id: 4, name: "Chicken Wings"},
        {id: 5, name: "Beef Burger"}
      ]
    },
    "Food for your pet": {
      "Dog": [
        {id: 6, name: "Chicken"},
        {id: 7, name: "Beef"}
      ],
      "Cat": [
        {id: 8, name: "Fish"},
        {id: 9, name: "Meat"},
        {id: 10, name: "Milk"}
      ],

    }
  }
  ```

    