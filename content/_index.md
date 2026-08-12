---
displayinlist: false
outputs:
  - iiif-collection
  - html
  - rss
cascade:
  - target:
      kind: 'page'
      path: '/privacy'
    params:
      sitemap:
        disable: true
  - target:
      kind: '*'
      path: '**'
    params:
      sitemap:
        priority: 1.0

---
