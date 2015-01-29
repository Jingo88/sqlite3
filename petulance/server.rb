# We are putting in only changes here

require "sqlite3"

db=SQLite3::Database.new "petulance.db"

get '/pets' do
	pets = db.execute("SELECT * FROM pets")
	erb :index, locals:{pets: pets}
end

post '/pet' do
	newpet = [params["name"], params["type"]]
	db.execute("INSERT INTO pets (name, type) VALUES (?, ?)", newpet)
	# you can also put in #{params["name"]} in place of the question marks

	redirect '/pets'
end

get '/pet/:id' do
	thispet = db.execute("SELECT * FROM pets WHERE id=(?)", params[:id].to_i)
	erb :show, locals: {thispet: thispet}
end

put '/pet/:id' do
	db.execute("UPDATE pets SET name = (?) WHERE id = (?)", params["newname"], params[:id].to_i)
	redirect '/pets'
end

delete '/pet/:id' do
	db.execute("DELETE FROM pets WHERE id=(?)", params[:id].to_i)
	redirect 'pets'
end