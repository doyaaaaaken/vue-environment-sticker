# how to develop (for contributors)

Pull requests for new theme label are welcome!! 🎉

Existing themes are put on `src/components/theme` directory as Vue components.
You'll put the new theme on this directory.

You can check the appearance of new developing theme component.
Enter the below commands.

```
cd example
yarn install
yarn serve
```

And then you can see `example/App.vue` contents.
By changing `App.vue`, you can test the appearance and behavior. 

# Release command (only for the library creator)

```
yarn build
yarn publish
```
