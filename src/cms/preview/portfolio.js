import React from 'react'

// var PostPreview = createClass({
//   render: function() {
//     var entry = this.props.entry;
//     var image = entry.getIn(['data', 'image']);
//     var bg = this.props.getAsset(image);
//     return h('div', {},
//       h('h1', {}, entry.getIn(['data', 'title'])),
//       h('img', {src: bg.toString()}),
//       h('div', {"className": "text"}, this.props.widgetFor('body'))
//     );
//   }
// });


// entry: Immutable collection containing the entry data.
// widgetFor: Returns the appropriate widget preview component for a given field.
// widgetsFor: Returns an array of objects with widgets and associated field data. For use with list and object type entries.
// getAsset: Returns the correct filePath or in-memory preview for uploaded images. Example:


const PortfolioPreivew = props => {
  // console.log(props)
  console.log('props.entry', props.entry)
  return (
    <div>
      it works!!!!
    </div>
  )
}

export default PortfolioPreivew