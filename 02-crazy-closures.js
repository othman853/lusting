(console.log.bind(console))((items => Array.prototype.join.bind(items))((stuff => suffix => stuff.map(s => s + suffix))(['learn', 'understand', 'study', 'test'])('ing'))(';'))


// Still don't know how to ident this thing
(console.log.bind(console))
  (
    (items => Array.prototype.join.bind(items))
    (
      (stuff => suffix => stuff.map(s => s + suffix))
        (['learn', 'understand', 'study', 'test'])('ing')
    )

    (';')
  )
