import UploadPhotos from "./UploadPhotos";

const PostForm: React.FC = () => {

    return (
        <form action="">
            <label htmlFor="productName">Product Name</label>
            <input type="text" id="productName" />
            <label htmlFor="price">Price $</label>
            <input type="number" id="price" />
            <label htmlFor="category">Categroy</label>
            <select name="categories" id="category">
                <option value="null" selected>--None--</option>
                <option value="barbell">Barbell</option>
                <option value="weight">Weight</option>
                <option value="bench">Bench</option>
                <option value="dumbbell">Dumbbell</option>
                <option value="Rack">Rack</option>
                <option value="machine">Machine</option>
                <option value="conditioning">Conditioning</option>
                <option value="strongman">Strongman</option>
                <option value="crossfit">Crossfit</option>
                <option value="gymnastics">Gymnastics</option>
            </select>
            <label htmlFor="brand">Brand</label>
            <select name="brands" id="brand">
                <option value="null" selected>--None--</option>
                <option value="rogue">Rogue</option>
                <option value="rep">Rep</option>
                <option value="sorinex">Sorinex</option>
                <option value="titan">Titan</option>
                <option value="peloton">Peloton</option>
                <option value="elitefts">EliteFTS</option>
                <option value="nordictrack">NordicTrack</option>
                <option value="lifefitness">LifeFitness</option>
                <option value="eleiko">Eleiko</option>
                <option value="trx">TRX</option>
            </select>
            <label htmlFor="condition">Condition</label>
            <select name="condition" id="condition">
                <option value="null" selected>--None--</option>
                <option value="brand new">Brand New</option>
                <option value="excellent">Excellent</option>
                <option value="great">Great</option>
                <option value="good">Good</option>
                <option value="used">Used</option>
            </select>
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
            <label htmlFor="zip">Zip</label>
            <input type="text" id="zip" />
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" className='resize' cols={30} rows={10}></textarea>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
            <UploadPhotos />
            <button type="submit">Post</button>
        </form>

    );
}

export default PostForm;