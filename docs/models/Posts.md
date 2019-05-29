# Purpose

The purpose of the post APIs will be to allow the user to post items onto their blog and read the posts from other people. They should be able to update their posts after making them. Or even deleting their posts.

### POST
```
/api/post/
header {
  auth
}
body {
  title,
  content,
  visibility ( Optional )
}
```

### PUT
```
/api/post/:id
header {
  auth
}
body {
  title (Optional),
  content (Optional),
  visibility (Optional)
}
```

### GET
```
/api/post/
/api/post/:id
```

### DELETE
```
> /api/post/:id
header {
  auth
}
```