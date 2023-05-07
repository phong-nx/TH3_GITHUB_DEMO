
    // ham khoi tao dong h
    //var  khao bao bien toan cuc
    //let khai bai bien cuc 
    //khao bao vs ham const thi khong thay doi gia tri
    // arr.push(6) la gan them phan tu
  //giai phuong trinh bac nhat
  var a;
  var b;
function giai_pt_bac_nhat(a, b)
{
    if(a === 0 && b === 0)
    {
        alert('phuong trinh vo nghiem');
    }
    else if( a != 0 && b === 0)
    {
        alert('phuong trinh  co nghiem x = 0');
    }
    else if(a == 0 && b != 0)
    {
        alert('phuong trinh vo ngiem');
    }
    else{
        alert('phuong trinh co ngiem x=' + (-b/a))
    }
}

