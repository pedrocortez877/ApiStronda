export default async (req, res, next) => {
  res.ok = (content) => {
    res.body = content;
    return res.status(200).json(content);
  };

  res.created = (content) => {
    res.body = content;
    return res.status(201).json(content);
  };

  res.noContent = () => {
    res.status(204);
  };

  res.badRequest = (content) => {
    res.body = content;
    return res.badRequest(content);
  };

  res.unauthorized = (content) => {
    res.body = content;
    return res.status(401).json(content);
  };

  res.notFound = (content) => {
    res.body = content;
    return res.status(404).json(content);
  };

  res.notAcceptable = (content) => {
    res.body = content;
    return res.status(406).json(content);
  };

  res.internalServerError = (content) => {
    res.body = content;
    return res.status(500).json(content);
  };

  next();
};
