document.addEventListener('DOMContentLoaded', function() {
    console.log('script loaded');
    const inputs = document.querySelectorAll('.controls input');
    console.log(inputs);

    function handleUpdate() {
        //console.log(this.value);
        const suffix = this.dataset.sizing || '';
        //console.log(this.name);
        document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
    }

    
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));
});
