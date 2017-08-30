export default props =>
<div className="content">
  {props.children}
  <style jsx>{`
    .content {
      margin: auto;
    }

  `}</style>
</div>