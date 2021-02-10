export default function (doc) {
  if (doc.isBroken) {
    return '/not-found';
  }

  if (doc.type === 'home') {
    return '/';
  }

  if (doc.type === 'page') {
    return '/' + doc.uid;
  }

  return '/not-found';
}
