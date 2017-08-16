git checkout gh-pages && \
    git rebase master && \
    npm run build && \
    git add . && \
    git commit -m 'update website' && \
    git push -f origin gh-pages

git checkout master
