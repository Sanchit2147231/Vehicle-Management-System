<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
  <html>
  <body>
    <style>
      <style>
                *{
                    margin: 0;
                    padding: 0;
                }
                body{
                    background-color: #f9f9f9;
                    font-family: 'Montserrat';
                }
                h1{
                    text-align: center;
                    color: white;
                    background-color: #141d70;
                    padding:1%;
                }
                table{
                    background-color: #e3e3e3;
                    margin:2% 5%;
                    width:90%;
                    text-align:center;
                    border-width:thin;

                }
                td, th{
                    text-align:center;
                    padding:1.5%;
                    font-size:25px;

                }
            </style>
    </style>
  <h1>OUR TOP SELLERS</h1>
  <table border="1">
    <tr bgcolor="#567bd1">
      <th>Seller ID</th>
      <th>Seller Name</th>
      <th>Seller No</th>
      <th>Seller Type</th>      
    </tr>
    <xsl:for-each select="selling/seller">
    <tr>
      <td><xsl:value-of select="@id"/></td>
      <td><xsl:value-of select="seller_name"/></td>
      <td><xsl:value-of select="seller_no"/></td>
      <td><xsl:value-of select="seller_type"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>