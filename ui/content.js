export default props =>
<div className="content">
  {props.children}
  <style jsx>{`
    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: auto;
    }
    
  `}</style>
</div>